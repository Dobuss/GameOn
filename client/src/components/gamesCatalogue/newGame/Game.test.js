import {Game} from './Game';
import { render, screen } from '@testing-library/react';
import { AuthProvider } from '../../../contexts/AuthContext';

describe('Game', () => {
    const game = {
        imageUrl: 'https://softuni.bg/Files/Courses/wordpressfordevelopers.png',
        category: 'Platform',
        name: 'Game Test',
        date: '2016'
    };
    test('Show game name', () => {        
        render(<AuthProvider><Game game={game}/></AuthProvider>)
        expect(screen.getByText(game.name)).toBeInTheDocument();
    });
    test('Show game date', () => {
        render(<AuthProvider><Game game={game}/></AuthProvider>)
        expect(screen.getByText(game.date)).toBeInTheDocument(); 
    });
    test('Show game category', () => {
        render(<AuthProvider><Game game={game}/></AuthProvider>)
        expect(screen.getByText(`Category: ${game.category}`)).toBeInTheDocument();
    })
    test('Show image', () => {
        render(<AuthProvider><Game game={game}/></AuthProvider>)
        const alt = screen.getByAltText('gamePic');
        expect(alt.src).toContain(game.imageUrl);

    })
});