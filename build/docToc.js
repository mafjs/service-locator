'use strict';

// Load modules

const Toc = require('markdown-toc');
const Fs = require('fs');
const Package = require(__dirname + '/../package.json');

// Declare internals

const internals = {
    api: {
        filename: __dirname + '/../docs/api.md',
        contents: Fs.readFileSync(__dirname + '/../docs/api.md', 'utf8')
    }
};

internals.generateToc = function() {
    const tocOptions = {
        bullets: '-',
        slugify: function(text) {
            return text.toLowerCase()
                .replace(/\s/g, '-')
                .replace(/[^\w-]/g, '');
        }
    };

    const api = Toc.insert(internals.api.contents, tocOptions)
        .replace(
            /<!-- version -->(.|\n)*<!-- versionstop -->/,
            `<!-- version -->\n# ${Package.version} API Reference\n<!-- versionstop -->`
        );

    Fs.writeFileSync(internals.api.filename, api);
};


internals.generateToc();
