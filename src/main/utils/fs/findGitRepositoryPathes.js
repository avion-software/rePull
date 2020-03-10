import { promises as fs } from 'fs';
import path from 'path';

const EMPTY_ARRAY = [];

export default async function findGitRepositoryPathes(basePath, maxDepth = 5) {
    try {
        const children = await fs.readdir(basePath);

        if (children.indexOf('.git') > -1) {
            return [basePath];
        }

        if (maxDepth < 0) {
            return EMPTY_ARRAY;
        }

        const retVal = [];
        await Promise.all(children.map(async (child) => {
            const newBasePath = path.resolve(basePath, child);
            const childData = await findGitRepositoryPathes(newBasePath, maxDepth - 1);

            if (childData?.length) {
                retVal.push(...childData);
            }
        }));

        return retVal;
    } catch {
        return EMPTY_ARRAY;
    }
}