import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="artwork">
      <div className="artwork-image"></div>
      <p className="artwork-attribution">
        Art by{" "}
        <a class="url" rel="contact" href="/tarka">
          Peter Tarka
        </a>
      </p>
    </div>
  );
};

export default Sidebar;
