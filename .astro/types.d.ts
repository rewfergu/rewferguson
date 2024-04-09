declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"post": {
};
"words": {
"arcade-game.mdx": {
	id: "arcade-game.mdx";
  slug: "arcade-game";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"arduino-web-controller.mdx": {
	id: "arduino-web-controller.mdx";
  slug: "arduino-web-controller";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"branches.mdx": {
	id: "branches.mdx";
  slug: "branches";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"drawing-game.mdx": {
	id: "drawing-game.mdx";
  slug: "drawing-game";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"dynamicat.mdx": {
	id: "dynamicat.mdx";
  slug: "dynamicat";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"framesqueezer.mdx": {
	id: "framesqueezer.mdx";
  slug: "framesqueezer";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"frank-tank.mdx": {
	id: "frank-tank.mdx";
  slug: "frank-tank";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"hangman.mdx": {
	id: "hangman.mdx";
  slug: "hangman";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"neighborhood-map.mdx": {
	id: "neighborhood-map.mdx";
  slug: "neighborhood-map";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"photo-scrampble.mdx": {
	id: "photo-scrampble.mdx";
  slug: "photo-scramble";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"quadcopter.mdx": {
	id: "quadcopter.mdx";
  slug: "quadcopter";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"timer.mdx": {
	id: "timer.mdx";
  slug: "timer";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"untitled-water-drop-game.mdx": {
	id: "untitled-water-drop-game.mdx";
  slug: "untitled-water-drop-game";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
"weather-lamp.mdx": {
	id: "weather-lamp.mdx";
  slug: "weather-lamp";
  body: string;
  collection: "words";
  data: any
} & { render(): Render[".mdx"] };
};
"work": {
"acc-catalog.mdx": {
	id: "acc-catalog.mdx";
  slug: "acc-catalog";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"acc-online.mdx": {
	id: "acc-online.mdx";
  slug: "acc-online";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"budget-tracker.mdx": {
	id: "budget-tracker.mdx";
  slug: "budget-tracker";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"flip-draw.mdx": {
	id: "flip-draw.mdx";
  slug: "flip-draw";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"iw-wordpress-theme.mdx": {
	id: "iw-wordpress-theme.mdx";
  slug: "iw-wordpress-theme";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"notecode.mdx": {
	id: "notecode.mdx";
  slug: "notecode";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"photo-search.mdx": {
	id: "photo-search.mdx";
  slug: "photo-search";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"sail-ui.mdx": {
	id: "sail-ui.mdx";
  slug: "sail-ui";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"setsail.mdx": {
	id: "setsail.mdx";
  slug: "setsail";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"sounddeck.mdx": {
	id: "sounddeck.mdx";
  slug: "sounddeck";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"todoredo.mdx": {
	id: "todoredo.mdx";
  slug: "todoredo";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
