import Home from './pages/Home/Home'
import About from './pages/About/About'
import Accomodation from './pages/Accomodation/Accomodation'
import NotFound from './pages/NotFound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/accomodation/:id',
        element: <Accomodation />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
