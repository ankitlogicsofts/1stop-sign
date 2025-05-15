"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Skeleton,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { GetBlogPage } from "@/lib/api/api";

const BlogSection = () => {
  const [data, setData] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const perPage = 21;
  const isFetching = useRef(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchBlogs = useCallback(async () => {
    if (isFetching.current) return;

    isFetching.current = true;
    setLoading(true);

    try {
      const response = await GetBlogPage(page, perPage);
      if (response?.data) {
        if (page === 1) {
          setData(response.data);
        }
        setBlogs((prev) => [...prev, ...response.data.fields]);
        setTotalBlogs(response.data.total);

        const totalPages = response.data.total_pages;
        if (page >= totalPages) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      isFetching.current = false;
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  // Handle scroll to bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetHeight = document.documentElement.offsetHeight;
      const windowHeight = window.innerHeight;

      if (
        scrollTop + windowHeight >= offsetHeight - 100 &&
        blogs.length < totalBlogs
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blogs, totalBlogs]);

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
        {loading && page === 1 ? (
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
          {(loading && page === 1
            ? Array.from({ length: perPage })
            : blogs
          ).map((blog, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              {blog ? (
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
              ) : (
                <Box className="boxB">
                  <Skeleton variant="rectangular" width="100%" height={250} />
                  <Skeleton width="60%" height={20} />
                  <Box className="boxBcontent">
                    <Skeleton width="80%" height={30} />
                    <Skeleton width="100%" height={60} />
                    <Skeleton width="30%" height={20} />
                  </Box>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>

        {loading && page > 1 && (
          <Box display="flex" justifyContent="center" mt={3}>
            <CircularProgress />
          </Box>
        )}
        {!loading && !hasMore && (
          <Box mt={4} textAlign="center">
            <Typography variant="body1">No more posts to show.</Typography>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default BlogSection;
