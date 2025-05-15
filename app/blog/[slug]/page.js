"use client";
import React, { useEffect, useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GetBlogBySlug } from "@/lib/api/api";
import { Box, Typography, Skeleton, Container } from "@mui/material";
import Image from "next/image";

const Page = ({ params }) => {
  // const { slug } = params;
  const { slug } = use(params);

  const [blogDetail, setBlogDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await GetBlogBySlug(slug);
        if (response) {
          setBlogDetail(response);
        } else {
          notFound();
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <section id="blogDetail">
        <Container>
          <Skeleton
            variant="text"
            width="60%"
            height={60}
            style={{ margin: "0 auto" }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={600}
            sx={{ my: 2 }}
          />

          <Box className="breadcrumb">
            <Skeleton width="20%" height={30} />
            <Skeleton width="20%" height={30} />
            <Skeleton width="40%" height={30} />
          </Box>

          <Box className="blog">
            {[...Array(3)].map((_, i) => (
              <Box key={i} sx={{ my: 3 }}>
                <Skeleton variant="text" width="40%" height={40} />
                <Skeleton variant="text" width="100%" height={80} />
              </Box>
            ))}
          </Box>
        </Container>
      </section>
    );
  }

  return (
    <section id="blogDetail">
      <Box className="container">
        <Typography
          variant="h1"
          dangerouslySetInnerHTML={{
            __html: blogDetail?.data?.title,
          }}
        />

        {blogDetail?.data?.image && (
          <Image
            src={blogDetail?.data?.image}
            alt={blogDetail?.data?.title}
            title={blogDetail?.data?.title}
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        )}

        <ul className="breadcrumb">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>{blogDetail?.data?.title?.replace(/<[^>]+>/g, "")}</li>
        </ul>

        <Box className="blog">
          <Typography
            variant="body"
            dangerouslySetInnerHTML={{
              __html: blogDetail?.data?.content,
            }}
          />
          {/* {blogDetail?.contentSections?.map((section, index) => (
            <Box key={index}>
              <Typography
                variant="h2"
                dangerouslySetInnerHTML={{
                  __html: section.section_title,
                }}
              />
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{
                  __html: section.section_content,
                }}
              />
            </Box>
          ))} */}
        </Box>
      </Box>
    </section>
  );
};

export default Page;
