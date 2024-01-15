"use client";
import React from "react";
import {
  Heading,
  SimpleGrid,
  Image,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import InterestsCard from "./InterestsCard";
import { interestsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Page = () => {
  return (
    <>
      <Center m={5}>
        <Box width="80vw" height="100%">
          <RevealWrapper className="load-hidden" id="about" delay={300}>
            <Heading className="sub-heading" size="md" my={3}>
              ABOUT
            </Heading>
            <SimpleGrid
              columns={[1, null, 2]}
              gap={6}
              fontSize="1.1rem"
              marginBottom="4rem"
              templateColumns={[null, null, "30% 70%"]}
            >
              <Image
                objectFit="shrink"
                src="/images/profile.png"
                alt="profile-image"
                width={["20rem", "30rem", "20rem"]}
                height={["20rem", "30rem", "20rem"]}
                marginBottom={["1rem", "1rem", null]}
              />

              <Box textAlign="justify">
                <Heading size="xl" mb={3}>
                  Hi there
                </Heading>
                <br />
                <Text>
                  I&apos;m <span className="name">JinMing</span>, a passionate
                  software developer. Experienced and highly skilled web developer who has a proven track record in creating dynamic and responsive web applications. I have a strong command of various technologies such as React.js, Next.js, Vue.js, Node.js, Express.js, Wordpress, Django, Laravel, Tailwind CSS, Material UI, SCSS, and Sass. I excel in writing clean and efficient code, improving user experiences, and finding solutions to complex technical problems. I am dedicated to staying updated with the latest trends in web development and delivering exceptional solutions that surpass client expectations.
                </Text>
                <br />
                <Text>
                  Open to collaborations and exciting projects, I&apos;m
                  eager to connect with fellow developers and tech enthusiasts.
                  Let&apos;s build something amazing together!
                </Text>
                <Text>
                  Happy coding!
                  <br />
                </Text>
              </Box>
            </SimpleGrid>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" id="interests" delay={600}>
            <Heading className="sub-heading" size="md" my={3}>
              INTERESTS
            </Heading>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
            >
              {interestsData.map((data, index) => {
                return (
                  <InterestsCard
                    interest={data.interest}
                    icon={data.icon}
                    key={index}
                  />
                );
              })}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Page;
