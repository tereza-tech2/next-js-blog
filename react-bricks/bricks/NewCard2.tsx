import classNames from 'classnames'
import * as React from 'react'
import { Image, Link, Repeater, RichText, types } from 'react-bricks/frontend'
import { bgColors, textColors } from '../colors'
import Container, { Size } from '../layout/Container'
import Section, { Border } from '../layout/Section'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from '../LayoutSideProps'


export interface MyHeroTexts {
    bg?: { color: string; className: string }
    width?: Size
    heroTitle?: boolean
    mobileTextCenter?: boolean
    bulletsVariant?: { color: string; className: string }
  }
  
  const NewCard2: types.Brick<MyHeroTexts> = ({
    bg = bgColors.white.value,
    width = 'lg',
    heroTitle = false,
    mobileTextCenter = false,
    // bulletsVariant = bulletColors.pinkLight.value,
  }) => {
    const titleColor = textColors.gray900
    const highlightColor = textColors.purple500
    const textColor = textColors.gray700
  
    return (
      <Section bg={bg}>
        <Container
          size={width}
          className={classNames(
            'py-12 lg:py-20 flex flex-no-wrap md:items-start md:space-x-8',
            'items-start',
            'flex-col',
             'md:flex-row'
          )}
        >
          <div
            className={classNames(
              'w-full md:flex-1 flex flex-col', 'md:pr-1/10'
            )}
          >
            <Repeater
              propName="badge"
              renderWrapper={(items) => (
                <div
                  className={classNames('mb-4 flex', {
                    'justify-center md:justify-start': mobileTextCenter,
                  })}
                >
                  {items}
                </div>
              )}
            />
  
            <RichText
              propName="title"
              renderBlock={(props) => (
                <h2
                  className={classNames(
                    'mt-0 mb-4',
                    titleColor,
                    {
                      'text-center md:text-left': mobileTextCenter,
                    },
                    heroTitle
                      ? 'text-3xl sm:text-4xl font-black'
                      : 'text-2xl sm:text-3xl font-extrabold'
                  )}
                  style={{ lineHeight: 1.125 }}
                  {...props.attributes}
                >
                  {props.children}
                </h2>
              )}
              placeholder="Type a title..."
              allowedFeatures={[types.RichTextFeatures.Highlight]}
              renderHighlight={(props) => (
                <span className={highlightColor} {...props.attributes}>
                  {props.children}
                </span>
              )}
            />
  
            <RichText
              propName="text"
              renderBlock={(props) => (
                <p
                  className={classNames('text-lg sm:text-xl mb-3', textColor, {
                    'text-center md:text-left': mobileTextCenter,
                  })}
                  style={{ lineHeight: 1.6 }}
                  {...props.attributes}
                >
                  {props.children}
                </p>
              )}
              placeholder="Type a text..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Link,
              ]}
              renderLink={(props) => (
                <Link {...props} className="text-lg">
                  {props.children}
                </Link>
              )}
            />
  
            <Repeater
              propName="bulletListItems"
              itemProps={{
                className: 'lg:w-2/5 text-lg',
              }}
              renderWrapper={(items) => (
                <div className="mt-4 w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
                  {items}
                </div>
              )}
            />
            <Repeater
              propName="buttons"
              renderWrapper={(items) => (
                <div className="flex items-center flex-col sm:flex-row mt-4">
                  {items}
                </div>
              )}
            />
          </div>
        
        </Container>
      </Section>
    )
  }
  
  NewCard2.schema = {
    name: 'NewCard2',
    label: 'New Card 2',
    category: 'rb-ui website',
   
    getDefaultProps: () => ({
      bg: {
        color: '#fff',
        className: 'bg-white dark:bg-gray-900',
      },
      borderTop: 'none',
      borderBottom: 'none',
      width: 'lg',
      title: 'We built hundreds of apps',
      heroTitle: false,
      mobileTextCenter: false,
      text: 'We create and host websites since 1997. We saw the Internet grow up as the standards evolved. We have built hundreds of successful web applications and we still have a lot of fun.',
    }),
    sideEditProps: [
      BackgroundColorsSideEditProps,
      ContainerSizeSideEditProps,
      {
        groupName: 'Text',
        defaultOpen: true,
        props: [
          {
            name: 'heroTitle',
            label: 'Hero-size Title',
            type: types.SideEditPropType.Boolean,
            shouldRefreshText: true,
          },
          {
            name: 'mobileTextCenter',
            label: 'Text centered on mobile',
            type: types.SideEditPropType.Boolean,
            shouldRefreshText: true,
          },
        ],
      },
    ],
    repeaterItems: [
      {
        name: 'badge',
        itemType: 'badge',
        itemLabel: 'Badge',
        min: 0,
        max: 1,
      },
      {
        name: 'bulletListItems',
        itemType: 'bullet-list-item',
        itemLabel: 'Feature',
        min: 0,
        max: 4,
      },
      {
        name: 'buttons',
        itemType: 'button',
        itemLabel: 'Button',
        min: 0,
        max: 1,
      }
    ],
  }
  

export default NewCard2