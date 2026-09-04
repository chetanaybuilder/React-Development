import { useState } from "react";

function FoundItemForm() {
  const [item, setItem] = useState("");
  const [location, setLocation] = useState("");
  const [when, setWhen] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    console.log("Item:", item);
    console.log("Location:", location);
    console.log("When:", when);
    console.log("Description:", description);
  }

  return (
    <section className="form-card">
      <div className="form-header">
        <div>
          <p className="eyebrow">FOUND SOMETHING?</p>
          <h2>Report a found item</h2>
        </div>

        <div className="shield">✓</div>
      </div>

      <p className="form-description">
        Give us a few details so the item can potentially be matched
        with its owner.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>What did you find?</label>

          <input
            type="text"
            placeholder="e.g. Black wallet"
            value={item}
            onChange={(event) => setItem(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Where did you find it?</label>

          <input
            type="text"
            placeholder="e.g. Central Park"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>When did you find it?</label>

          <input
            type="text"
            placeholder="e.g. Today at 2 PM"
            value={when}
            onChange={(event) => setWhen(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Describe the item</label>

          <textarea
            placeholder="Add useful details such as color, markings, or anything distinctive..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>

        <button className="btn" type="submit">
          Report Found Item
          <span>→</span>
        </button>
      </form>

      {submitted && (
        <div className="success-message">
          <div className="success-icon">✓</div>

          <div>
            <strong>Report received</strong>
            <p>
              Thanks for helping return this item. Your report has been
              recorded successfully.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default FoundItemForm;