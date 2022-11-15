import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/camilacno.png',
        name: 'Camila Nepomuceno',
        role: 'Front-end developer',
      },
      content: [
        { type: 'paragraph', content: 'Fala pessoal 👋' },
        {
          type: 'paragraph',
          content:
            'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻',
        },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-11-14T18:24:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/rebecacno.png',
        name: 'Rebeca Nepomuceno',
        role: 'Estudante de programação',
      },
      content: [
        { type: 'paragraph', content: 'Fala pessoal 👋' },
        {
          type: 'paragraph',
          content:
            'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻',
        },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-11-13T15:37:00'),
    },
  ]
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
