import React from 'react';

const Blog = () => {
    // Inline styles
    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: 0,
            backgroundColor: '#f4f4f4',
        },
        header: {
            backgroundColor: '#333',
            color: 'white',
            padding: '1rem',
        },
        nav: {
            display: 'flex',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            listStyle: 'none',
        },
        navItem: {
            margin: '0 1rem',
        },
        navLink: {
            color: 'white',
            textDecoration: 'none',
        },
        navLinkHover: {
            textDecoration: 'underline',
        },
        blogContainer: {
            maxWidth: '1200px',
            margin: 'auto',
            padding: '2rem',
        },
        blogContent: {
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },
        blogPost: {
            marginBottom: '2rem',
        },
        blogPostTitle: {
            fontSize: '1.5rem',
            color: '#333',
        },
        blogPostDate: {
            fontSize: '0.9rem',
            color: '#666',
        },
        blogPostLink: {
            color: '#007bff',
            textDecoration: 'none',
        },
        blogPostLinkHover: {
            textDecoration: 'underline',
        },
        readMoreButton: {
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
        },
        readMoreButtonHover: {
            backgroundColor: '#0056b3',
        },
        footer: {
            textAlign: 'center',
            padding: '1rem',
            backgroundColor: '#333',
            color: 'white',
            position: 'fixed',
            bottom: 0,
            width: '100%',
        },
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <nav>
                    <ul style={styles.nav}>
                        <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
                        <li style={styles.navItem}><a href="/about" style={styles.navLink}>About Me</a></li>
                        <li style={styles.navItem}><a href="/projects" style={styles.navLink}>Projects</a></li>
                        <li style={styles.navItem}><a href="/skills" style={styles.navLink}>Skills</a></li>
                        <li style={styles.navItem}><a href="/contact" style={styles.navLink}>Contact</a></li>
                        <li style={styles.navItem}><a href="/blog" style={styles.navLink}>Blog</a></li>
                    </ul>
                </nav>
            </header>

            <main style={styles.blogContainer}>
                <div style={styles.blogContent}>
                    {/* Blog Post 1 */}
                    <article style={styles.blogPost}>
                        <time style={styles.blogPostDate} dateTime="2024-09-10">September 10, 2024</time>
                        <h2 style={styles.blogPostTitle}>Building a Full-Stack Application: A Step-by-Step Guide</h2>
                        <p>In today’s tech-driven world, full-stack development is essential for creating dynamic and robust web applications. This guide will walk you through building a full-stack application from scratch, covering everything from environment setup to deployment. Whether you’re a beginner or looking to refresh your skills, this step-by-step approach will help you understand the core concepts and best practices.</p>
                        <p><strong>Step 1: Setting Up Your Development Environment</strong></p>
                        <p>Before diving into development, you need to set up your environment. Here’s what you’ll need:</p>
                        <ul>
                            <li><strong>Text Editor:</strong> Visual Studio Code or Sublime Text.</li>
                            <li><strong>Version Control:</strong> Git for managing code changes.</li>
                            <li><strong>Package Manager:</strong> npm or Yarn for handling dependencies.</li>
                            <li><strong>Web Server:</strong> Local server setup using XAMPP or similar.</li>
                        </ul>
                        <p><strong>Installation Tips:</strong></p>
                        <ul>
                            <li><strong>Visual Studio Code:</strong> Download and install from the <a href="https://code.visualstudio.com/" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">official website</a>.</li>
                            <li><strong>Git:</strong> Install from <a href="https://git-scm.com/" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">Git’s official site</a>.</li>
                        </ul>
                        <p><strong>Step 2: Front-End Development</strong></p>
                        <p>The front-end is what users interact with. For this project, we’ll use HTML, CSS, and JavaScript:</p>
                        <ul>
                            <li><strong>HTML:</strong> Structure your web pages.</li>
                            <li><strong>CSS:</strong> Style your content. Use frameworks like Bootstrap for responsive design.</li>
                            <li><strong>JavaScript:</strong> Add interactivity. Consider using libraries like jQuery or frameworks like React.js.</li>
                        </ul>
                        <p><strong>Example Code:</strong></p>
                        <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Full-Stack App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to My App</h1>
    <script src="script.js"></script>
</body>
</html>`}</code></pre>
                        <p><strong>Step 3: Back-End Development</strong></p>
                        <p>The back-end handles the server-side logic and database operations:</p>
                        <ul>
                            <li><strong>Server Setup:</strong> Use Node.js with Express for creating a server.</li>
                            <li><strong>Database:</strong> Set up a database like MongoDB or MySQL.</li>
                            <li><strong>API:</strong> Create endpoints to handle requests and responses.</li>
                        </ul>
                        <p><strong>Example Code:</strong></p>
                        <pre><code>{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});`}</code></pre>
                        <p><strong>Step 4: Deployment</strong></p>
                        <p>Finally, deploy your application:</p>
                        <ul>
                            <li><strong>Choose a Hosting Service:</strong> Options include Heroku, AWS, and DigitalOcean.</li>
                            <li><strong>Configure Deployment:</strong> Set up environment variables and build scripts.</li>
                            <li><strong>Deploy:</strong> Push your code to the chosen platform.</li>
                        </ul>
                        <p><a href="https://www.heroku.com/" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">Heroku Deployment Guide</a></p>
                        <a href="https://example.com/full-stack-application-guide" style={styles.readMoreButton} target="_blank" rel="noopener noreferrer">Read More</a>
                    </article>

                    {/* Blog Post 2 */}
                    <article style={styles.blogPost}>
                        <time style={styles.blogPostDate} dateTime="2024-09-11">September 11, 2024</time>
                        <h2 style={styles.blogPostTitle}>Advanced Techniques in Database Optimization</h2>
                        <p>Database optimization is crucial for maintaining the performance and efficiency of a database system. This post explores advanced techniques to optimize your database, ensuring faster queries and better resource utilization.</p>
                        <p><strong>Indexing</strong></p>
                        <p>Indexing speeds up data retrieval by creating a data structure that allows for quick searches. Types of indexes include:</p>
                        <ul>
                            <li><strong>Single-Column Indexes:</strong> Improve performance for queries filtering on one column.</li>
                            <li><strong>Composite Indexes:</strong> Enhance performance for queries filtering on multiple columns.</li>
                        </ul>
                        <p><a href="https://www.mysqltutorial.org/mysql-index/" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">Learn more about MySQL Indexes</a></p>
                        <p><strong>Query Optimization</strong></p>
                        <p>Optimize queries to reduce execution time. Techniques include:</p>
                        <ul>
                            <li><strong>Using EXPLAIN:</strong> Analyze query execution plans to identify bottlenecks.</li>
                            <li><strong>Query Refactoring:</strong> Rewrite queries for better performance.</li>
                        </ul>
                        <p><a href="https://www.postgresql.org/docs/current/using-explain.html" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">PostgreSQL EXPLAIN Documentation</a></p>
                        <p><strong>Database Maintenance</strong></p>
                        <p>Regular maintenance tasks include:</p>
                        <ul>
                            <li><strong>Updating Statistics:</strong> Ensure the query planner has accurate information.</li>
                            <li><strong>Defragmenting Tables:</strong> Improve storage efficiency and performance.</li>
                        </ul>
                        <p><a href="https://www.oracle.com/database/technologies/maintenance.html" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">Oracle Database Maintenance Guide</a></p>
                        <a href="https://example.com/database-optimization-techniques" style={styles.readMoreButton} target="_blank" rel="noopener noreferrer">Read More</a>
                    </article>

                    {/* Blog Post 3 */}
                    <article style={styles.blogPost}>
                        <time style={styles.blogPostDate} dateTime="2024-09-12">September 12, 2024</time>
                        <h2 style={styles.blogPostTitle}>Exploring Quantum Computing: The Next Frontier</h2>
                        <p>Quantum computing is an emerging field with the potential to revolutionize computing power. This post provides an overview of quantum computing, its principles, and its future implications.</p>
                        <p><strong>Principles of Quantum Computing</strong></p>
                        <p>Quantum computing is based on the principles of quantum mechanics:</p>
                        <ul>
                            <li><strong>Qubits:</strong> The basic unit of quantum information, which can represent both 0 and 1 simultaneously. Learn more about <a href="https://www.ibm.com/quantum-computing/what-is-quantum-computing/" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">qubits</a>.</li>
                            <li><strong>Superposition:</strong> Qubits can exist in multiple states at once, enabling parallel processing. Discover more about <a href="https://www.quantamagazine.org/superposition-what-it-means-for-quantum-computing-20190723/" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">superposition</a>.</li>
                            <li><strong>Entanglement:</strong> Qubits can be entangled, meaning the state of one qubit can depend on the state of another, even across distances. Discover more about <a href="https://www.scientificamerican.com/article/quantum-entanglement-a-wild-new-world/" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">entanglement</a>.</li>
                            <li><strong>Quantum Gates:</strong> Quantum gates manipulate qubits and perform operations that are not possible with classical logic gates. Explore <a href="https://quantum-computing.ibm.com/docs/iqx/overview/quantum-gates" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">quantum gates</a>.</li>
                        </ul>
                        <p><strong>Current State of Quantum Computing</strong></p>
                        <p>Quantum computing is still in its early stages, with significant advancements being made in both hardware and software:</p>
                        <ul>
                            <li><strong>Hardware:</strong> Companies like IBM, Google, and D-Wave are developing quantum processors with increasing qubit counts and improved error rates. Check out IBM's <a href="https://www.ibm.com/quantum-computing/hardware/" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">quantum hardware</a> advancements.</li>
                            <li><strong>Software:</strong> Quantum algorithms are being researched to solve specific problems such as factoring large numbers and simulating quantum systems. Learn about <a href="https://quantum-computing.ibm.com/docs/algorithms" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">quantum algorithms</a>.</li>
                        </ul>
                        <p><strong>Implications for the Future</strong></p>
                        <p>The advent of quantum computing holds profound implications for various fields:</p>
                        <ul>
                            <li><strong>Cryptography:</strong> Quantum computers could potentially break traditional encryption methods, prompting the need for quantum-resistant algorithms. Explore the impact on <a href="https://www.researchgate.net/publication/341068691_Quantum_Threats_to_Cryptography" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">cryptography</a>.</li>
                            <li><strong>Drug Discovery:</strong> Quantum simulations could accelerate the discovery of new drugs by modeling molecular interactions more precisely. Learn about <a href="https://www.nature.com/articles/s41586-019-1678-8" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">quantum drug discovery</a>.</li>
                            <li><strong>Optimization Problems:</strong> Quantum computing could revolutionize logistics and supply chain management by solving complex optimization problems more efficiently. Read more about <a href="https://www.forbes.com/sites/forbestechcouncil/2022/03/21/how-quantum-computing-will-transform-logistics-and-supply-chain-management/" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">quantum optimization</a>.</li>
                        </ul>
                        <p><strong>Challenges Ahead</strong></p>
                        <p>Despite its potential, quantum computing faces several challenges:</p>
                        <ul>
                            <li><strong>Decoherence:</strong> Maintaining the stability of qubits in a coherent state is challenging and requires advanced error correction techniques. Understand the challenge of <a href="https://www.nature.com/articles/s41534-019-0227-2" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">decoherence</a>.</li>
                            <li><strong>Scalability:</strong> Building scalable quantum systems with a large number of qubits remains a significant technical hurdle. Check out <a href="https://www.technologyreview.com/2020/09/09/quantum-computing-scale/" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">scalability issues</a>.</li>
                            <li><strong>Resource Requirements:</strong> Quantum computing requires significant resources, including low temperatures and precise control mechanisms. Explore the <a href="https://www.techradar.com/news/what-is-quantum-computing" style={styles.blogPostLink} target="_blank" rel="noopener noreferrer">resources needed</a>.</li>
                        </ul>
                        <a href="https://example.com/quantum-computing-future" style={styles.readMoreButton} target="_blank" rel="noopener noreferrer">Read More</a>
                    </article>
                </div>
            </main>

            <footer style={styles.footer}>
                <p>&copy; 2024 Dennis Anyende Makaka. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Blog;
