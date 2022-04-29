import { gql, GraphQLClient } from 'graphql-request';
import Reactmarkdown from 'react-markdown';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Heading from '../../../components/Heading/Heading';
import Tag from '../../../components/Tag/Tag';
import styles from './Problem.module.scss';

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  const url = process.env.API_CONTENT_URL;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const query = gql`
    query ($pageSlug: String!) {
      problems(where: { slug: $pageSlug }) {
        title
        description
        slug
        generalText
        consequences
        solutions
        references
        date
        keywords
        categorySlug
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, vars);
  const problem = data.problems;

  return {
    props: { problem },
  };
};

const Category = ({ problem }) => {
  return (
    <>
      <Navbar />
      <main>
        {problem.map((problem) => {
          return (
            <div key={problem.slug}>
              <Heading title={problem.title} paragraph={problem.description} />
              <div className={styles.problem}>
                <div className={styles.problemBlock}>
                  <h3>Keywords</h3>
                  <div className={styles.problemTags}>
                    {problem.keywords.split(', ').map((tag) => (
                      <Tag key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
                <div className={styles.problemBlock}>
                  <h3>General</h3>
                  <Reactmarkdown children={problem.generalText} />
                </div>
                <div className={styles.problemBlock}>
                  <h3>Consequences</h3>
                  <Reactmarkdown children={problem.consequences} />
                </div>
                <div className={styles.problemBlock}>
                  <h3>Solutions</h3>
                  <Reactmarkdown children={problem.solutions} />
                </div>
                <div className={styles.problemBlock}>
                  <h3>References</h3>
                  <Reactmarkdown children={problem.references} />
                </div>
              </div>
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Category;
