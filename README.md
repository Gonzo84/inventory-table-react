# Project Overview

This project is a React application built with TypeScript. It includes features for managing and filtering an inventory, with a focus on maintaining a clean and efficient architecture. Table can be filtered both by regions, article labels, legal entities, versions and by the combination of these filters. 

## Architectural Concepts

### 1. Component-Based Architecture
The application is structured using React components, which promote reusability and separation of concerns. Each component is responsible for a specific part of the UI.

### 2. State Management
State management is handled using a custom store (`useInventoryStore`). This store centralizes the state related to inventory, regions, and filters, making it easier to manage and access throughout the application.

### 3. Custom Hooks
Custom hooks, such as `useInventory`, encapsulate logic related to fetching and filtering inventory data. This promotes code reuse and keeps components clean and focused on rendering UI.

### 4. Recursive Filtering
The `applyFilters` function recursively filters the inventory and its sub-inventory while maintaining the tree structure. This ensures that all matching items and their sub-inventories are included, even if the parent does not match.

### 5. Performance Optimization
The application uses `useMemo` to memoize the filtered inventory, preventing unnecessary recalculations and improving performance.

### 6. Type Safety
TypeScript is used throughout the application to ensure type safety, reducing the likelihood of runtime errors and improving code maintainability.

### 7. Asynchronous Data Fetching
Data fetching is handled asynchronously using the `fetchInventory` function, which is called within a `useEffect` hook to load inventory data when the component mounts.

## File Structure

- `src/components`: Contains React components for the UI.
- `src/hooks`: Contains custom hooks for encapsulating logic.
- `src/services`: Contains service functions for API calls.
- `src/store`: Contains the custom store for state management.
- `src/models`: Contains TypeScript models for type definitions.

## Key Files

- `src/App.tsx`: The main application component.
- `src/hooks/useInventory.ts`: Custom hook for managing inventory data.
- `src/components/table/Table.component.tsx`: Component for displaying the inventory table.
- `src/components/filters/Filters.component.tsx`: Component for managing filters.

## Getting Started

To get started with the project, follow these steps:

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Open the application in your browser: `http://localhost:3000`

## Conclusion

This application demonstrates a clean and efficient architecture using React and TypeScript, with a focus on component reusability, state management, and performance optimization.