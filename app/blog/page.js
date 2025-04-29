"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { GetBlogPage } from "@/lib/api/api";

const BlogSection = () => {
  const [data, setData] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPage = async () => {
      try {
        const response = await GetBlogPage();
        if (response) {
          setData(response?.data);
          setBlogs(response?.data?.fields);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPage();
  }, []);

  const getPlainPreview = (html, limit = 150) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const text = tempElement.textContent || tempElement.innerText || "";
    return text.length > limit
      ? text.substring(0, limit).trim() + "[...]"
      : text;
  };

  return (
    <section id="BlogSection">
      <Container className="MainHead">
        {loading ? (
          <Skeleton
            variant="text"
            width={150}
            height={60}
            style={{ margin: "0 auto" }}
          />
        ) : (
          <Typography variant="h2" component="h2">
            {data?.title}
          </Typography>
        )}
      </Container>

      <Container id="blogWrp">
        <Grid container spacing={3}>
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Box className="boxB">
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={250}
                      style={{ borderRadius: "8px" }}
                    />
                    <Skeleton
                      width="60%"
                      height={20}
                      style={{ margin: "10px 0" }}
                    />
                    <Box className="boxBcontent">
                      <Skeleton width="80%" height={30} />
                      <Skeleton width="100%" height={60} />
                      <Skeleton
                        width="30%"
                        height={20}
                        style={{ marginTop: 10 }}
                      />
                    </Box>
                  </Box>
                </Grid>
              ))
            : blogs?.map((blog, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Link href={`blog/${blog?.slug}`} className="boxB">
                    <Image
                      src={blog.image}
                      alt="img"
                      width={400}
                      height={250}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <Typography className="date">{blog.date}</Typography>
                    <Box className="boxBcontent">
                      <Typography variant="h5" component="h3">
                        {blog.title}
                      </Typography>

                      <Typography variant="body1">
                        {getPlainPreview(blog?.content, 125)}
                      </Typography>

                      <span className="readMbtn">Read more</span>
                    </Box>
                  </Link>
                </Grid>
              ))}
        </Grid>
      </Container>
    </section>
  );
};

export default BlogSection;
