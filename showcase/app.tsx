import {
  Badge,
  Container,
  Heading,
  Link,
  ListItem,
  Tooltip,
  UnorderedList
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import Clipboard from 'clipboard';

import * as Icons from '../';

const iconNames = Object.keys(Icons).filter((key) =>
  key.startsWith('Collecticon')
);

export function App() {
  return (
    <Container
      maxW='container.xl'
      color='white'
      display='flex'
      flexFlow='column'
    >
      <Heading
        as='h1'
        textTransform='uppercase'
        fontSize={{
          base: '4xl',
          sm: '5xl',
          md: '6xl',
          lg: '8xl'
        }}
        position='relative'
        pt='16'
        alignSelf='center'
      >
        Collecticons{' '}
        <Badge
          as='small'
          colorScheme='green'
          position='absolute'
          bottom={{ base: '-0.5rem', sm: '0.5rem', lg: '1rem' }}
          right={{
            base: '-1rem',
            sm: '-2rem'
          }}
          transform='rotate(-20deg)'
          fontSize={{
            base: 'sm',
            lg: 'xl'
          }}
        >
          for Chakra
        </Badge>
      </Heading>

      <UnorderedList
        display='flex'
        justifyContent='center'
        gap={{ base: '4', lg: '8' }}
        styleType='none'
        flexWrap='wrap'
        mt='16'
      >
        {iconNames.map((iconName) => {
          const Cmp = (
            Icons as unknown as Record<string, Icons.CollecticonChakra>
          )[iconName];

          return (
            <ListItem
              key={iconName}
              display='flex'
              background='rgba(255,255,255,0.16)'
            >
              <CollecticonItem Component={Cmp} name={iconName} />
            </ListItem>
          );
        })}
      </UnorderedList>
    </Container>
  );
}

function CollecticonItem({
  Component,
  name
}: {
  Component: Icons.CollecticonChakra;
  name: string;
}) {
  const [showCopiedMsg, setShowCopiedMsg] = useState(false);

  const triggerElement = useRef<HTMLAnchorElement>(null);
  const copyValue = useRef<string>(name);
  copyValue.current = name;

  useEffect(() => {
    if (!triggerElement.current)
      throw new Error('ref for trigger element is not set');

    let copiedMsgTimeout: number | undefined;
    const clipboard = new Clipboard(triggerElement.current, {
      text: () => copyValue.current
    });

    clipboard.on('success', () => {
      setShowCopiedMsg(true);
      copiedMsgTimeout = setTimeout(() => {
        setShowCopiedMsg(false);
      }, 2000);
    });

    return () => {
      clipboard.destroy();
      if (copiedMsgTimeout) {
        clearTimeout(copiedMsgTimeout);
      }
    };
  }, []);

  return (
    <Tooltip hasArrow placement='top' label={showCopiedMsg ? 'Copied!' : name}>
      <Link
        href='#'
        p='4'
        onClick={(e) => e.preventDefault()}
        ref={triggerElement}
      >
        <Component size={{ base: '4', lg: '8' }} />
      </Link>
    </Tooltip>
  );
}
