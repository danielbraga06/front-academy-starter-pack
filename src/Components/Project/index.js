import "./styles.css";

import Text from "../Text";

function Project({ imageUrl, title, link }) {
  return (
    <a
      className="project-container"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <img alt={title} src={imageUrl} />

      <div className="project__text">
        <Text fontSize={18}>{title}</Text>

        <Text color="#6A6A6A" fontSize={25}>
          {">"}
        </Text>
      </div>
    </a>
  );
}

export default Project;
