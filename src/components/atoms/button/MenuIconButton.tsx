import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React, { FC } from "react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = (props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      size="sm"
      variant="unstyled"
      icon={<HamburgerIcon />}
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
};
