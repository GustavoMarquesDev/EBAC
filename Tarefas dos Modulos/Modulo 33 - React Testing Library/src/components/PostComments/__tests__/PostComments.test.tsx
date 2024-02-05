import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe("teste para adiconar um comentario", () => {
  test("Deve renderizar corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar um comentario", () => {
    render(<PostComment />);

    //  PRIMERIO COMENTARIO
    fireEvent.change(screen.getByTestId("comment"), {
      target: {
        value: "que carro dahora",
      },
    });

    fireEvent.click(screen.getByTestId("btn-adicionar"));

    // SEGUNDO COMENTARIO
    fireEvent.change(screen.getByTestId("comment"), {
      target: {
        value: "esse carro é dahora mesmo",
      },
    });

    fireEvent.click(screen.getByTestId("btn-adicionar"));

    expect(screen.getAllByTestId("comments")).toHaveLength(2);
  });
});
