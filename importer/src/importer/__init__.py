import os
import mwxml
import sys
import meilisearch

if __name__ == '__main__':
    assert os.environ['MEILISEARCH_HOST']
    assert os.environ['MEILISEARCH_KEY']

    # connect to meilisearch
    client = meilisearch.Client(os.environ['MEILISEARCH_HOST'], os.environ['MEILISEARCH_KEY'])

    # start reading dump
    dump = mwxml.Dump.from_file(sys.stdin)

    # create index with dump name
    index = client.index(dump.site_info.dbname)

    i = 0
    buffer = []

    for page in dump.pages:
        data = page.to_json()
        buffer.append(data)

        if i % 1500 == 0:
            index.add_documents(buffer)
            print('added batch')

        i += 1
