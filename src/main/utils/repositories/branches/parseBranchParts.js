export default function parseBranchPaths(branches) {
    return Object.values(branches).map(({ name, commit, current }) => {
        const branchPath = name.split('/');

        return {
            name,
            path: branchPath,
            commit,
            current,
        };
    });
}
