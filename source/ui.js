"use strict";
const React = require("react");
const { Box, Text } = require("ink");
const SelectInput = require("ink-select-input").default;
const open = require("open");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const createItems = items => {
	for (const item of items) {
		item.key = item.url || item.label;
	}

	return items;
};

const items = createItems([
	{
		label: "Site",
		url: "https://nichtt.io"
	},
	{
		label: "Twitter",
		url: "https://twitter.com/nichtthat"
	},
	{
		label: "GitHub",
		url: "https://github.com/nicht"
	},
	{
		label: "GitLab",
		url: "https://gitlab.com/nicht"
	},
	{
		label: "Blog",
		url: "https://blog.nichtt.io"
	},
	{
		label: "Me manda uma mensagem!",
		url: "https://nichtt.io/contact"
	},
	{
		label: "Currículo",
		url: "https://nichtt.io/cv"
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: "---------"
	},
	{
		label: "Quit",
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
]);

module.exports = () => (
	<Box flexDirection="column">
		<Gradient name="rainbow">
			<BigText text="hey! it's me, nicht!" />
		</Gradient>
		<Box marginBottom={1}>
			<Text>
				Meu nome é Rodolfo Olivieri e sou Desenvolvedor FullStack (NodeJS e PHP)
			</Text>
		</Box>
		<SelectInput items={items} onSelect={handleSelect} />
	</Box>
);
