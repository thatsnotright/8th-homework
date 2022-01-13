## To run

This project assumes you have Node >= 16 and NPM available

You should then run `npm install` to get dependencies

Tests may be run via `npm test` or `npm test-watch`

Husky will run prettier and eslint on git commit.

## Question Number B

How might you extend your solution to process tens of millions of elements in the list of:

Ids:

An ID of specialties may not be wholly contained in memory, which would make my solution unusable. However, given that the solution can be run as a map-reduce job it would be a simple matter of partitioning the Id list in to a set of N ids per chunk and generating a result of M unique specialties. Then it would be a matter of reducing the M unqiue specialties across N nodes into one final, unique specialty list. One could also consider an API which would take a list of IDs and return a list of unique specialties, which would then allow generation of a long list of specialties to be unique-ifyed.

Specialities:
You could consider throwing all of the specialties in a DB like MySQL or Redis, and issuing a query which covers a range of specialties or just one (this would be non-optimal). Then it would be a matter of iterating through the id list and waiting for a response for the specialty, and tracking Ids that have already been requested. This could be run in parallel to make retrievel more efficient, with some locking around the datastructure that holds the current set of returned specialties by id, to ensure we don't issue duplicate requests for an id.

Both:
A combination of the above, break up the Id list in to distinct chunks of Ids, assign these chunks to nodes, each node then will get their specialities from a cluster of specialty nodes (where the deterministic hash of a specialty id to node for the data is required) which can contain their owned list of data. This will result in a list of lists of specialties (which would be unique per list) that should then be further broken down if it will not all fit in to memory.
