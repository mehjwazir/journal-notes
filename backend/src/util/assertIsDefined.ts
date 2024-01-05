

///this function allows you to pass any Type to it. It checks that this type is not null. It also works for undefined. 



export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
	if (!val) {
		throw Error("Expected 'val' to be defined, but received " + val);
	}
}