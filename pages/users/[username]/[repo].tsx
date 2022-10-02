import { NextPage } from "next"
import { useRouter } from "next/router"
import { useReadme, useRepository, useUser } from "../../../libs/fetcher"
import { Grid, Column, Container, Readme, Sidebar, Main, Skeleton } from "../../../components/sharedstyled"
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import styled from "styled-components"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from 'rehype-highlight'
import remarkToc from "remark-toc"
import remarkGithub from "remark-github"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import Link from "next/link"
import { useEffect } from "react"

const Title = styled.h1`
    margin:25px 0;
    font-size: 28px;
    @media(max-width:380px) {
        font-size: 18px;
    }

    a {
        color: #58a6ff;
    }
`

const Avatar = styled(Image)`
    border-radius: 100%;
`

const RepoPage: NextPage = () => {
    const router = useRouter()
    const user = useUser(router.query.username??null);
    const path = router.query.username+'/'+router.query.repo;
    const repository = useRepository(router.query.username && router.query.repo ? path : null);
    const readme = useReadme(router.query.username && router.query.repo ? path : null);

    useEffect(() => {
        if (user.isError || repository.isError) {
            router.push('/notfound');
        }
    }, [user, repository])
    
    return (
        <>
            <Navbar/>
            <Main>
            <Container>
                <Grid md={4}>
                    <Column span={1}>
                        { user.isLoading && <Skeleton style={{padding:'0px 15px'}}>
                            <div className="item" style={{width:'140px',height:'140px',borderRadius:'100%',marginLeft:'auto',marginRight:'auto'}}></div>
                            <div className="item" style={{width:'70%'}}></div>
                            <div className="item" style={{width:'70%'}}></div>
                            <div className="item" style={{width:'90%'}}></div>
                            <div className="item" style={{width:'100%'}}></div>
                            <div className="item" style={{width:'100%'}}></div>
                            <div className="item" style={{width:'100%'}}></div>
                            </Skeleton>}
                        <Sidebar>
                            <div style={{textAlign:'center'}}>
                            { user.data && <Avatar src={user.data?.avatar_url} alt={'Avatar'} height={140} width={140} /> }
                            </div>
                            <h1 style={{marginBottom:0}}>{user.data?.name}</h1>
                            <h3 style={{color:'#b1b5b9',marginTop:0}}>{user.data?.login}</h3>
                            <p style={{fontSize:14}}>{user.data?.bio}</p>
                            { user.data?.company && 
                            <div style={{display:'flex',alignItems:'center',margin:'.8rem 0'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" height={16} width={20} fill="white" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>
                                <span style={{fontSize:14,wordWrap:'break-word',marginLeft:10}}>{user.data?.company}</span>
                            </div>}
                            { user.data?.location && 
                            <div style={{display:'flex',alignItems:'center',margin:'.8rem 0'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" height={16} width={20} fill="white" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
                                <span style={{fontSize:12,wordWrap:'break-word',marginLeft:10}}>{user.data?.location}</span>
                            </div>}
                            { user.data?.email && 
                            <div style={{display:'flex',alignItems:'center',margin:'.8rem 0'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" height={16} width={20} fill="white" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                <span style={{fontSize:12,wordWrap:'break-word',marginLeft:10}}>{user.data?.email}</span>
                            </div>}
                            { user.data?.blog && 
                            <div style={{display:'flex',alignItems:'center',margin:'.8rem 0'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" height={16} width={20} fill="white" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                                <span style={{fontSize:12,wordWrap:'break-word',marginLeft:10}}>{user.data?.blog}</span>
                            </div>}
                        </Sidebar>
                    </Column>
                    <Column span={3}>
                        <Title style={{marginBottom:5}}><Link href={`/users/${router.query.username}`}><a>{router.query.username}</a></Link> / {router.query.repo}</Title>
                        { repository.isLoading && <Skeleton>
                                    <div className="item" style={{width:'100%'}}></div>
                                    <div className="item" style={{width:'100%'}}></div>
                                </Skeleton>}
                        { repository.data && <p style={{marginTop:0}}>{repository.data.description}</p>}
                        <Readme>
                            { readme.isLoading && <Skeleton>
                                    <div className="item" style={{width:'80%'}}></div>
                                    <div className="item" style={{width:'70%'}}></div>
                                    <div className="item" style={{width:'90%'}}></div>
                                    <div className="item" style={{width:'100%'}}></div>
                                    <div className="item" style={{width:'100%'}}></div>
                                    <div className="item" style={{width:'100%'}}></div>
                                </Skeleton>}
                            { readme.isError && <h3>Readme Not Found!</h3>}
                        { readme.data && readme.data.content && <ReactMarkdown 
                            children={Buffer.from(readme.data.content, 'base64').toString().replaceAll("img src=\"/", `img src="https://raw.githubusercontent.com/${path}/${repository.data?.default_branch??'master'}/`)} 
                            remarkPlugins={[remarkParse,remarkGfm, remarkToc, [remarkGithub, {repository: path}]]}
                            rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
                            />
                        }
                        </Readme>
                    </Column>
                </Grid>
            </Container>
            </Main>
            <Footer/>
        </>
    )
}

export default RepoPage