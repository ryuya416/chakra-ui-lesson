import { Heading, Text, VStack, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomErrorPage = () => {
  const router = useRouter();

  return (
    <VStack spacing="10">
      <Heading fontSize="5xl" fontWeight="medium">
        Page not found
      </Heading>
      <Text fontSize="2xl">{router.asPath} ページは存在しません</Text>
      <Link href="/">
        <Box _hover={{ cursor: "pointer", color: "blue.400" }} color="blue.600">
          ホームに戻る
        </Box>
      </Link>
    </VStack>
  );
};

export default CustomErrorPage;
