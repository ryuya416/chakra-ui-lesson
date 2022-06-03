import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
};

export const UserCard: FC<Props> = (props) => {
  const { imageUrl, userName, fullName } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ opacity: 0.8, cursor: "pointer" }}
    >
      <Stack textAlign="center">
        <Image
          src={imageUrl}
          boxSize="160px"
          borderRadius="full"
          alt="プロフィール画像"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
};
