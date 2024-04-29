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
		"words": {
"StoryRoute.md": {
	id: "StoryRoute.md";
  slug: "storyroute";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"arcade-game.md": {
	id: "arcade-game.md";
  slug: "arcade-game";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"arduino-web-controller.md": {
	id: "arduino-web-controller.md";
  slug: "arduino-web-controller";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"branches.md": {
	id: "branches.md";
  slug: "branches";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"drawing-game.md": {
	id: "drawing-game.md";
  slug: "drawing-game";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"dynamicat.md": {
	id: "dynamicat.md";
  slug: "dynamicat";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"framesqueezer.md": {
	id: "framesqueezer.md";
  slug: "framesqueezer";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"frank-tank.md": {
	id: "frank-tank.md";
  slug: "frank-tank";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"hangman.md": {
	id: "hangman.md";
  slug: "hangman";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"its-alive/index.mdx": {
	id: "its-alive/index.mdx";
  slug: "its-alive";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".mdx"] };
"neighborhood-map.md": {
	id: "neighborhood-map.md";
  slug: "neighborhood-map";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"obsidian.md": {
	id: "obsidian.md";
  slug: "obsidian";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"photo-scrampble.md": {
	id: "photo-scrampble.md";
  slug: "photo-scramble";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"quadcopter.md": {
	id: "quadcopter.md";
  slug: "quadcopter";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"timer.md": {
	id: "timer.md";
  slug: "timer";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"untitled-water-drop-game.md": {
	id: "untitled-water-drop-game.md";
  slug: "untitled-water-drop-game";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
"weather-lamp.md": {
	id: "weather-lamp.md";
  slug: "weather-lamp";
  body: string;
  collection: "words";
  data: InferEntrySchema<"words">
} & { render(): Render[".md"] };
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
