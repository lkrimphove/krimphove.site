type Project = {
  name: string;
  description: string;
  url?: string;
  github?: string;
  blog?: string;
  image: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  };
};

export default Project;
