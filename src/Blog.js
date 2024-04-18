import React, { useState } from "react";
import "./Blog.css";
import blog1 from "./images/blog1.png";
import blog2 from "./images/blog2.png";
import blog3 from "./images/blog3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCalendarDays,faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  const [blogs] = useState([
    {
      blogimg: blog1,
      blogdate: "Mar 4,2024",
      blogcomment: "10",
      title: "Cooking tips make cooking simple",
    },
    {
      blogimg: blog2,
      blogdate: "Feb 14,2024",
      blogcomment: "30",
      title: "6 best ways to prepare breakfast for 30",
    },
    {
      blogimg: blog3,
      blogdate: "Jan 15,2024",
      blogcomment: "71",
      title: "Visit our organic farm in TamilNadu",
    },
  ]);

  return (
    <div className="container">
      <div>
        <h3 className="blog-sec-text">From The Blogs</h3>
      </div>
      <div className="row d-flex flex-row justify-content-center">
        {blogs.map((blog) => (
          <div className="col-12 col-md-6 col-lg-4 mt-3">
            <div className="blog-card p-4">
              <img
                className="blog-img"
                src={blog.blogimg}
                alt={blog.title}
                width="100%"
              />
              <div className="p-3">
                <div className="d-flex flex-row justify-content-start mt-3">
                  <div className="d-flex flex-row">
                    <FontAwesomeIcon icon={faCalendarDays} className="mt-1"/>
                    <p className="ms-2">{blog.blogdate}</p>
                  </div>
                  <div className="d-flex flex-row ms-3">
                    <FontAwesomeIcon icon={faComment} className="mt-1"/>
                    <p className="ms-2">{blog.blogcomment}</p>
                  </div>
                </div>
                <h5>
                  <b>{blog.title}</b>
                </h5>
                <p className="mt-3 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="d-flex flex-row justify-content-end mb-0 mt-4">
                  <a href="#home" className="read-more">Read more</a>
                  <FontAwesomeIcon icon={faArrowRight} className="mt-1 ms-2" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
