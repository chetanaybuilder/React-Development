import { rooms } from "../data/Room.js";

function AvailabilityList() {
  return (
    <section className="availability-section">
      <div className="section-heading">
        <span>ROOM STATUS</span>
        <span>{rooms.length} ROOMS</span>
      </div>

      <div className="room-grid">
        {rooms.map((room) => (
          <article className="room-card" key={room.id}>
            <div className="room-card-top">
              <span className="room-id">
                ROOM {String(room.id).padStart(2, "0")}
              </span>

              <span
                className={`status-dot status-${room.status}`}
              ></span>
            </div>

            <h2>{room.name}</h2>

            <p className={`room-status status-text-${room.status}`}>
              {room.status === "available"
                ? "🟢 Available"
                : room.status === "occupied"
                  ? "🔴 Occupied"
                  : "🟡 Cleaning"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AvailabilityList;
