export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <label for="name">Name:</label><br/>
        <input type="text" id="name"/><br/>
        <label for="email">Email Address:</label><br/>
        <input type="text" id="email"/><br/>
        <label for="message">Message:</label><br/>
        <input type="textarea" id="message"/><br/><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}
