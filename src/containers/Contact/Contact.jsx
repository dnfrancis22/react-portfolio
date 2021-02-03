import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <>
                {/* <!-- This container contains the majority of the content on the page. Header and form. --> */}
    <main className="container" id="container">
      {/* <!-- This is the main header for the article. (Contact) --> */}
      <header className="row">
        <section className="col">
          <h1>Contact</h1>
        </section>
      </header>
      {/* <!-- This article contains the contact form. --> */}
      <article className="row">
        <section className="col">
          <form>
            <section className="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </section>
            <section className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>          
            </section>
            <section className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </section>
            {/* <!-- This is the button that you click to submit the contact info entered. --> */}
            <button type="submit" id="submit">Submit</button>
          </form>
        </section>
      </article>
    </main>
        </>
    );
};

export default Contact;