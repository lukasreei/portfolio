function Card({ title, description, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    textAlign: "center",
    width: "250px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    margin: "1rem"
  },
  image: {
    width: "100%",
    borderRadius: "8px"
  }
};

export default Card;
