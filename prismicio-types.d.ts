// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArticleDocumentDataSlicesSlice = never;

/**
 * Content for article documents
 */
interface ArticleDocumentData {
  /**
   * thumbnail field in *article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail: prismic.ImageField<never>;

  /**
   * content field in *article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * author field in *article*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: article.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  author: prismic.ContentRelationshipField;

  /**
   * Slice Zone field in *article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice>;

  /**
   * publish_date field in *article*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: article.publish_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  publish_date: prismic.DateField /**
   * Meta Description field in *article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;

/**
 * Item in *author → author*
 */
export interface AuthorDocumentDataAuthorItem {
  /**
   * name field in *author → author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.author[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * avatar field in *author → author*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: author.author[].avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;
}

/**
 * Content for author documents
 */
interface AuthorDocumentData {
  /**
   * author field in *author*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: author.author[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  author: prismic.GroupField<Simplify<AuthorDocumentDataAuthorItem>>;
}

/**
 * author document from Prismic
 *
 * - **API ID**: `author`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AuthorDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AuthorDocumentData>, "author", Lang>;

export type AllDocumentTypes = ArticleDocument | AuthorDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArticleDocument,
      ArticleDocumentData,
      ArticleDocumentDataSlicesSlice,
      AuthorDocument,
      AuthorDocumentData,
      AuthorDocumentDataAuthorItem,
      AllDocumentTypes,
    };
  }
}