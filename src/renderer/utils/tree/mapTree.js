export default function mapTree(tree, path, cb) {
    const retVal = { ...tree };

    if (retVal.children) {
        retVal.children = { ...retVal.children };
        Object.entries(retVal.children).forEach(([key, value]) => {
            retVal.children[key] = mapTree(value, [...path, tree.name], cb);
        });
    }

    return cb([...path, tree.name], retVal);
}
