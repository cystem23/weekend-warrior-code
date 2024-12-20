import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { User } from '@prisma/client';
import AddUser from '@/components/AddUser';

const ListUsers = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  /* This is for protecting the page so that only signed in users can access:

  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  */
  const users: User[] = await prisma.user.findMany({});

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h2 className="text-center">Users</h2>
            {users.length === 0 ? (
              <div className="text-center my-3">
                <p>No users found</p>
              </div>
            ) : (
              <Row xs={1} md={2} lg={3} className="g-4">
                {users.map((user) => (
                  <Col key={user.id}>
                    <AddUser user={user} />
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ListUsers;
