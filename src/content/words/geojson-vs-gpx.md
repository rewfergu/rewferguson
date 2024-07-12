---
name: GeoJSON vs GPX
tags:
  - gpx
  - geojson
  - Maps
---
*What is the difference between GeoJSON and GPX?*

GPX (GPS Exchange Format) and GeoJSON (Geographic JavaScript Object Notation) are both file formats used to represent geographical data, but they differ in structure, use cases, and the type of data they support. Here are the key differences:

### GPX (GPS Exchange Format)

1. **Format and Structure**:
   - **XML-based**: GPX files are XML-based, meaning they are structured in a way similar to HTML with tags and attributes.
   - **Schema**: GPX has a specific schema defined by the GPS industry for sharing GPS data.

2. **Primary Use**:
   - **GPS Data**: Primarily used for storing and sharing GPS data, such as waypoints, tracks, and routes.
   - **Devices**: Commonly used by GPS devices and applications for tracking and navigation.

3. **Data Types**:
   - **Waypoints**: Individual points with coordinates and optional metadata (e.g., name, description).
   - **Tracks**: Ordered list of waypoints that represent a path.
   - **Routes**: Similar to tracks but often used for navigation purposes.

4. **Example**:
   ```xml
   <gpx version="1.1" creator="ExampleApp">
     <wpt lat="48.858844" lon="2.294351">
       <name>Eiffel Tower</name>
       <desc>A famous landmark in Paris.</desc>
     </wpt>
   </gpx>
   ```

### GeoJSON (Geographic JavaScript Object Notation)

1. **Format and Structure**:
   - **JSON-based**: GeoJSON files are based on JSON (JavaScript Object Notation), which is a lightweight data interchange format.
   - **Flexible**: Easier to read and write due to its simple structure.

2. **Primary Use**:
   - **Web and GIS**: Commonly used in web applications and Geographic Information Systems (GIS) for representing various types of geographical data.
   - **Interoperability**: Widely supported by modern mapping libraries and tools (e.g., Leaflet, OpenLayers).

3. **Data Types**:
   - **Point**: A single geographical point.
   - **LineString**: A line composed of multiple points.
   - **Polygon**: A shape defined by a series of points forming a closed loop.
   - **MultiPoint, MultiLineString, MultiPolygon**: Collections of points, lines, or polygons.
   - **Feature and FeatureCollection**: Encapsulate geometries with additional properties.

4. **Example**:
   ```json
   {
     "type": "Feature",
     "geometry": {
       "type": "Point",
       "coordinates": [2.294351, 48.858844]
     },
     "properties": {
       "name": "Eiffel Tower",
       "description": "A famous landmark in Paris."
     }
   }
   ```

### Key Differences

1. **Data Representation**: 
   - GPX is more rigid with a focus on GPS-related data.
   - GeoJSON is more flexible and can represent complex geometries and additional properties.

2. **Usage**:
   - GPX is ideal for GPS tracking and navigation devices.
   - GeoJSON is better suited for web applications, GIS, and data visualization.

3. **Compatibility**:
   - GPX is specifically designed for GPS hardware and software.
   - GeoJSON integrates well with web technologies and modern mapping tools.

Understanding these differences can help you choose the right format for your specific geographical data needs.