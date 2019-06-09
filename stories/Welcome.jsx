import React from "react";
import ReactMarkdown from "react-markdown";
import Readme from "../README.md";
import markdownStyle from "./public/github-markdown.css";

export default function Welcome() {
  return (
    <div
      style={{ background: "#fff", padding: "1rem 2rem" }}
      className="markdown-body"
    >
      <ReactMarkdown source={Readme} />
    </div>
  );
}
