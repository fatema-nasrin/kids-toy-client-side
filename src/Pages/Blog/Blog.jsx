const Blog = () => {
  return (
    <div className="bg-slate-300 p-5">
      <ul>
        <li className="text-3xl">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </li>
        <p className="text-slate-700 text-xl">
          Ans: the refresh token only goes back to the authorization server, the
          access token goes to the resource server. <br />
          working process_ <br />
          When a user logs in to a system , their credentials are verified by
          the server. If the credentials are valid, the server generates a
          token. The server generates a token that represents the user's
          authentication. This token is typically a string of characters and
          contains information about the user and their permissions. The token
          is digitally signed by the server to ensure its authenticity and
          integrity. The server stores the generated token, associating it with
          the user's session or account. The token may be stored in a secure
          server-side session, database, or a client-side storage mechanism such
          as cookies or local storage. The server sends the generated token back
          to the client. The client then stores the token locally for subsequent
          requests. On receiving a request with a token, the server verifies the
          token's authenticity and integrity. After validating the token, the
          server uses the information contained within it to determine the
          user's identity and permissions. Based on this information, the server
          grants or denies access to the requested resources or performs the
          authorized actions. <br />
          1.Store it in local browser storage. <br />
          2.client side, it can be safer than local browser storage. <br />
          3.Don't store the token but store username and password in the browser
          or client-side cookie, and then retrieve a new token by sending
          credentials silently.
        </p>

        <li className="text-3xl">2. Compare SQL and NoSQL databases?</li>
        <p className="text-slate-700 text-xl">
          Ans:difference between SQL an NOSQL.... <br />
          <ul>
            <li>
              Data Storage Model: <br />
              <b>SQl</b>: Tables with fixed rows and columns. <br />
              <b>NoSQL</b>: JSON documents, Key-value: key-value pairs,
              Wide-column: tables with rows and dynamic columns, Graph: nodes
              and edges
            </li>
            <li>
              Scaling: <br />
              <b>SQL</b>: Vertical (scale-up with a larger server) <br />
              <b>NoSQL</b>: Horizontal (scale-out across commodity servers)
            </li>
            <li>
              Examples: <br />
              <b>SQL</b>: Oracle, MySQL, Microsoft SQL Server, and PostgreSQL{" "}
              <br />
              <b>NoSQL</b>: MongoDB and CouchDB, Key-value: Redis and DynamoDB,
              Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune.
            </li>
          </ul>
        </p>
        <li className="text-3xl">3. What is express js? What is Nest JS?</li>
        <p className="text-slate-700 text-xl">
            Ans:  ExpressJS is a web framework that enables you to design a web application to handle a variety of different HTTP demands. 
            <br />
            NestJS is a JavaScript framework that requires zero setup. You can use the filesystem as an API, and since it's built on top of NodeJS, you can run use any Node framework for building the backend.

        </p>
        <li className="text-3xl">
          4. What is MongoDB aggregate and how does it work? 
        </li>
        <p className="text-slate-700 text-xl">
            Ans:The aggregation pipeline consists of a sequence of stages, where each stage takes the input from the previous stage and processes it further. Each stage performs a specific operation on the documents, such as filtering, grouping, sorting, projecting, or calculating aggregate values. <br />
            the aggregate operation is used to perform advanced data processing and analysis on collections of documents. It allows you to run complex queries, perform transformations, and aggregate data using a pipeline of stages.
        </p>
      </ul>
    </div>
  );
};

export default Blog;
