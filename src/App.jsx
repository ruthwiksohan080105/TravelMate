import { useState } from "react";
import "./App.css";

const destinations = [
  {
    id: 1,
    name: "Manali",
    country: "Himachal Pradesh, India",
    price: 8500,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    description: "Explore mountains, snow and beautiful valleys.",
  },
  {
    id: 2,
    name: "Goa",
    country: "India",
    price: 6500,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    description: "Enjoy beaches, sunsets and coastal adventures.",
  },
  {
    id: 3,
    name: "Bali",
    country: "Indonesia",
    price: 25000,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    description: "Discover tropical beaches and amazing temples.",
  },
  {
    id: 4,
    name: "Paris",
    country: "France",
    price: 45000,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    description: "Experience romantic streets and iconic landmarks.",
  },
  {
    id: 5,
    name: "Ladakh",
    country: "India",
    price: 15000,
    image: "https://images.unsplash.com/photo-1566837497312-7be7830ae9b1?w=800",
    description: "Experience adventurous roads and breathtaking views.",
  },
  {
    id: 6,
    name: "Maldives",
    country: "Maldives",
    price: 35000,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    description: "Relax in crystal-clear waters and luxury resorts.",
  },
];

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    location: "Mumbai, India",
    destination: "Manali",
    rating: 5,
    date: "August 2026",
    initials: "AS",
    review:
      "My Manali trip was absolutely amazing! The mountain views, peaceful atmosphere and travel planning experience made it unforgettable.",
  },
  {
    id: 2,
    name: "Priya Reddy",
    location: "Hyderabad, India",
    destination: "Goa",
    rating: 5,
    date: "July 2026",
    initials: "PR",
    review:
      "I always wanted to explore Goa. The destination suggestions helped me organize my trip perfectly. Loved the beaches and sunsets!",
  },
  {
    id: 3,
    name: "Rahul Verma",
    location: "Delhi, India",
    destination: "Ladakh",
    rating: 4,
    date: "June 2026",
    initials: "RV",
    review:
      "An incredible adventure! Ladakh has some of the most beautiful landscapes I have ever seen. Definitely worth experiencing.",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    location: "Bangalore, India",
    destination: "Bali",
    rating: 5,
    date: "May 2026",
    initials: "SK",
    review:
      "Bali was like a dream! Beautiful beaches, amazing temples and wonderful memories. Planning my next vacation already!",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [trip, setTrip] = useState([]);
  const [tripName, setTripName] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState(1);

  const filteredDestinations = destinations.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase()),
  );

  function addToTrip(place) {
    if (!trip.some((item) => item.id === place.id)) {
      setTrip([...trip, place]);
    }
  }

  function removeFromTrip(id) {
    setTrip(trip.filter((item) => item.id !== id));
  }

  const totalCost =
    trip.reduce((total, place) => total + place.price, 0) * travelers;

  function handleSubmit(event) {
    event.preventDefault();

    if (trip.length === 0) {
      alert("Please add at least one destination!");
      return;
    }

    alert(
      `Your trip "${tripName || "My Trip"}" has been planned successfully!`,
    );
  }

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          ✈ Travel<span>Mate.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#packages">Packages</a>
          <a href="#reviews">Reviews</a>
          <a href="#planner">Plan Trip</a>
          <a href="#about">About</a>
        </div>

        <a href="#planner" className="nav-button">
          Start Planning
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-tag">EXPLORE THE WORLD WITH US</p>

          <h1>
            Discover Your Next
            <br />
            <span>Great Adventure.</span>
          </h1>

          <p className="hero-description">
            Explore beautiful destinations, discover amazing places and create
            unforgettable travel experiences.
          </p>

          <a href="#destinations" className="primary-button">
            Explore Destinations →
          </a>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section" id="destinations">
        <div className="section-heading">
          <p className="section-tag">EXPLORE THE WORLD</p>
          <h2>Popular Destinations</h2>
          <p>Find your next favourite place to visit.</p>
        </div>

        <input
          className="search-input"
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="destination-grid">
          {filteredDestinations.map((place) => (
            <div className="destination-card" key={place.id}>
              <img src={place.image} alt={place.name} />

              <div className="card-content">
                <p className="location">{place.country}</p>
                <h3>{place.name}</h3>
                <p>{place.description}</p>

                <div className="card-bottom">
                  <strong>
                    ₹{place.price.toLocaleString("en-IN")}
                    <small> / person</small>
                  </strong>

                  <button
                    className="add-button"
                    onClick={() => addToTrip(place)}
                    disabled={trip.some((item) => item.id === place.id)}
                  >
                    {trip.some((item) => item.id === place.id)
                      ? "Added ✓"
                      : "Add to Trip +"}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredDestinations.length === 0 && <p>No destinations found.</p>}
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section" id="packages">
        <div className="section-heading">
          <p className="section-tag">TRAVEL YOUR WAY</p>
          <h2>Popular Travel Packages</h2>
          <p>Explore some exciting travel ideas.</p>
        </div>

        <div className="package-grid">
          <div className="package-card">
            <h3>Weekend Escape</h3>
            <p>Perfect for a short and refreshing holiday.</p>
            <h2>₹5,999</h2>
            <span>2 Days / 1 Night</span>
          </div>

          <div className="package-card featured">
            <h3>Adventure Explorer</h3>
            <p>For people who love adventure and nature.</p>
            <h2>₹12,999</h2>
            <span>5 Days / 4 Nights</span>
          </div>

          <div className="package-card">
            <h3>Luxury Vacation</h3>
            <p>Enjoy a relaxing and premium travel experience.</p>
            <h2>₹24,999</h2>
            <span>7 Days / 6 Nights</span>
          </div>
        </div>
      </section>

      {/* Traveller Reviews */}
      <section className="reviews-section" id="reviews">
        <div className="section-heading">
          <p className="section-tag">TRAVELLER STORIES</p>
          <h2>What Our Travellers Say</h2>
          <p>Real experiences make every journey special.</p>
        </div>

        <div className="review-summary">
          <h2>4.8/5 ⭐</h2>
          <p>Sample traveller rating</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-top">
                <div className="review-avatar">{review.initials}</div>

                <div>
                  <h3>{review.name}</h3>
                  <p>{review.location}</p>
                </div>
              </div>

              <div className="stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              <p className="review-text">"{review.review}"</p>

              <div className="review-footer">
                <strong>📍 {review.destination}</strong>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trip Planner */}
      <section className="planner-section" id="planner">
        <div className="planner-container">
          <div className="section-heading">
            <p className="section-tag">YOUR JOURNEY STARTS HERE</p>
            <h2>Plan Your Own Trip</h2>
            <p>Select destinations and organize your journey.</p>
          </div>

          <form className="planner-form" onSubmit={handleSubmit}>
            <label>Trip Name</label>
            <input
              type="text"
              placeholder="Example: Summer Vacation"
              value={tripName}
              onChange={(event) => setTripName(event.target.value)}
            />

            <label>Travel Date</label>
            <input
              type="date"
              value={travelDate}
              onChange={(event) => setTravelDate(event.target.value)}
              required
            />

            <label>Number of Travelers</label>
            <input
              type="number"
              min="1"
              max="20"
              value={travelers}
              onChange={(event) => setTravelers(Number(event.target.value))}
            />

            <h3>Your Selected Destinations</h3>

            {trip.length === 0 ? (
              <p className="empty-message">
                No destinations selected yet. Add some destinations above!
              </p>
            ) : (
              trip.map((place) => (
                <div className="trip-item" key={place.id}>
                  <span>{place.name}</span>
                  <strong>₹{place.price.toLocaleString("en-IN")}</strong>
                  <button
                    type="button"
                    onClick={() => removeFromTrip(place.id)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}

            <div className="total-cost">
              <span>Estimated total for {travelers} traveler(s)</span>
              <h2>₹{totalCost.toLocaleString("en-IN")}</h2>
            </div>

            <button type="submit" className="primary-button submit-button">
              Create My Trip →
            </button>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div>
          <p className="section-tag">ABOUT TRAVELMATE</p>
          <h2>Making Every Journey Special</h2>
          <p>
            TravelMate helps travellers discover exciting destinations, explore
            travel ideas and organize their journeys in one place. Our goal is
            to make travel planning simple, enjoyable and memorable.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <h2>TravelMate.</h2>
        <p>Your journey, your story, your adventure.</p>
        <p>© 2026 TravelMate. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
