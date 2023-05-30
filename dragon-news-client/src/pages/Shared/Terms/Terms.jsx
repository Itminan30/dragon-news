import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms And Conditions</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fugiat sequi provident suscipit porro alias eum optio libero. Quia voluptatem ex quos eum reiciendis perferendis? Deleniti dolor iusto similique rerum sequi vitae blanditiis excepturi qui, enim dolorum, quisquam sapiente cumque eius animi laboriosam ipsa adipisci, quaerat voluptatum accusantium quam. Quae quas atque cum excepturi totam suscipit nam, corporis harum similique blanditiis velit at facilis quam voluptas commodi dolorem? Ad repellendus debitis consequatur enim excepturi exercitationem accusamus explicabo aliquid suscipit itaque sint, recusandae vel dolore. Nemo, deserunt. Aliquam, molestias vitae! Impedit porro aliquid, quam veniam maxime hic a at cupiditate veritatis.
            </p>
            <p>
                Go Back to <Link to='/register'>Register</Link>
            </p>
        </Container>
    );
};

export default Terms;