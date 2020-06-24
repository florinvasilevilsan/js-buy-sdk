export default function handleCustomerMutation(mutationRootKey/* , client*/) {
  return function({data/* , model*/}) {
	const rootData = data[mutationRootKey]; /* const rootModel = model[mutationRootKey];*/

    const userErrors = rootData && rootData.userErrors ? rootData.userErrors : [];
    if (userErrors.length) {
      return Promise.reject(new Error(JSON.stringify(userErrors)));
    }
    delete rootData.userErrors;

    const customerUserErrors = rootData && rootData.customerUserErrors ? rootData.customerUserErrors : [];
    if (customerUserErrors.length) {
      return Promise.reject(new Error(JSON.stringify(customerUserErrors)));
    }
    delete rootData.customerUserErrors;

    return Promise.resolve(rootData);
  };
}