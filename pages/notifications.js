import AppLayout from '../src/components/layout/AppLayout';
import Container from '../src/components/common/Container';

const notifications = () => (
  <AppLayout>
    <Container className="pt-6">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <div className="bg-white">
        <nav className="flex flex-col sm:flex-row">
          <button
            type="button"
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500 uppercase text-lg"
          >
            All
          </button>
          <button
            type="button"
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none uppercase uppercase text-lg"
          >
            Interactions
          </button>
          <button
            type="button"
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none uppercase uppercase text-lg"
          >
            Liked
          </button>
          <button
            type="button"
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none uppercase uppercase text-lg"
          >
            Subscribed
          </button>
          <button
            type="button"
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none uppercase uppercase text-lg"
          >
            Tipped
          </button>
          <button
            type="button"
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none uppercase uppercase text-lg"
          >
            Promotions
          </button>
        </nav>
      </div>
      <div className="text-center text-gray-500 text-lg mt-2">
        No notifications currently!
      </div>
    </Container>
  </AppLayout>
);

export default notifications;
