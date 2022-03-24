import React, { useState } from "react";
import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { Search } from "tabler-icons-react";
// import { MantineLogo } from "../../shared/MantineLogo";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    // marginBottom: 0,
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface HeaderSearchProps {
  links: { link: string, label: string }[];
}

export default function HeaderWithSearch({ links }: HeaderSearchProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();
  const [searchedValue, setSearchedValue] = useState(null);

  function handleSearch(val) {
    setSearchedValue(val);
  }

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <Header
      height={56}
      className={classes.header}
      mb={120}
      style={{ marginBottom: 0 }}
    >
      <div className={classes.inner}>
        {/* https://mantine.dev/core/group/ */}
        {/* <Group>
          <Burger opened={opened} onClick={() => toggleOpened()} size="sm" />
        </Group> */}

        <Group position="right" spacing={5}>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          {/* https://mantine.dev/core/autocomplete/ */}
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<Search size={16} />}
            data={[
              "Cool dude",
              "That company",
              "abra",
              // "React",
              // "Angular",
              // "Vue",
              // "Next.js",
              // "Riot.js",
              // "Svelte",
              // "Blitz.js",
            ]}
            onChange={handleSearch}
          />
        </Group>
      </div>
    </Header>
  );
}
