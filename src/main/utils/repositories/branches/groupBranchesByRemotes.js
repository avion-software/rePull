export default function groupBranchesByRemotes(branches) {
    const retVal = {};

    branches.forEach((branch) => {
        const [remote, ...newPath] = branch.path;

        if (!retVal[remote]) {
            retVal[remote] = [];
        }

        retVal[remote].push({
            name: newPath.join('/'),
            path: newPath,
            commit: branch.commit,
            current: branch.current,
            remote,
        });
    });

    return retVal;
}
