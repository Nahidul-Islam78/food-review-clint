import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/HomePage';
import AllReview from '../pages/AllReview';
import AddReview from '../pages/AddReview';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PrivetRoute from './PrivetRoute';
import ReviewDetails from '../pages/ReviewDetails';
import MyReviews from '../pages/MyReviews';
import EditReview from '../pages/EditReview';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '/AllReview',
        Component: AllReview,
      },
      {
        path: '/reviewDetails',
        element:<ReviewDetails></ReviewDetails>
      },
      {
        path: '/MyReview',
        element: (
          <PrivetRoute>
            <MyReviews></MyReviews>
          </PrivetRoute>
        ),
      },
      {
        path: '/AddReview',
        element: (
          <PrivetRoute>
            <AddReview></AddReview>
          </PrivetRoute>
        ),
      },
      {
        path: '/editReview/:id',
        element: <PrivetRoute>
          <EditReview></EditReview>
        </PrivetRoute>
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/login',
        Component: Login,
      },
    ],
  },
]);
export default router;
