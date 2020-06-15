import AppLayout from '../src/components/layout/AppLayout';
import FeedGrid from '../src/components/home/FeedGrid';
import Container from '../src/components/common/Container';

const index = () => (
  <AppLayout>
    <Container>
      <div
        className='border-black inline-block'
        style={{ borderBottomWidth: 3 }}
      >
        <h1 className='text-3xl p-1 '>Home</h1>
      </div>
      <hr />
      <FeedGrid />
    </Container>
  </AppLayout>
);

export default index;
