import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/HomePage';
import AllReview from '../pages/AllReview';
import MyReview from '../pages/MyReview';
import AddReview from '../pages/AddReview';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component:HomePage
      },
      {
        path: '/AllReview',
        Component:AllReview
      },
      {
        path: '/MyReview',
        element:<MyReview></MyReview>
      },
      {
        path: '/AddReview',
        element:<AddReview></AddReview>
      }

    ]
  },
]);
export default router;
