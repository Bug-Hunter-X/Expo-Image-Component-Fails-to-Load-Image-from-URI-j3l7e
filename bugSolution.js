```javascript
// bugSolution.js
import React from 'react';
import { Image, ActivityIndicator, View } from 'react-native';

const MyImage = ({ source }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  return (
    <View>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text>Error loading image: {error.message}</Text>}
      {!isLoading && !error && (
        <Image
          source={{ uri: source }}
          style={{ width: 200, height: 200 }}
          onLoadEnd={() => setIsLoading(false)}
          onError={(e) => {
            setIsLoading(false);
            setError(e);
          }}
        />
      )}
    </View>
  );
};

export default MyImage;

```

```javascript
//bug.js
import React from 'react';
import { Image, View } from 'react-native';

const MyImage = ({ source }) => {
  return (
    <View>
      <Image
        source={{ uri: source }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default MyImage;
```