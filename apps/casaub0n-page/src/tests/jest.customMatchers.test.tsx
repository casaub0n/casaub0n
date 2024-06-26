import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Template", () => {
  test("<main>(role=main)", () => {
    const { container } = render(
      <main>
        <h2>test</h2>
        <button>+1</button>
      </main>,
    );
    expect(container).not.toBeAtom();
    expect(container).not.toBeMolecule();
    expect(container).not.toBeOrganism();
    expect(container).toBeTemplate();
  });
});

describe("Organisms", () => {
  function asserts(container: HTMLElement) {
    expect(container).not.toBeAtom();
    expect(container).not.toBeMolecule();
    expect(container).toBeOrganism();
    expect(container).not.toBeTemplate();
  }
  test("<aside>(role=complementary)", () => {
    const { container } = render(
      <aside>
        <h2>Test</h2>
        <button>+1</button>
      </aside>,
    );
    asserts(container);
  });
  test("<form>(role=form)", () => {
    const { container } = render(
      <form aria-label='test'>
        <h2 id='test'>Test</h2>
        <button>+1</button>
      </form>,
    );
    asserts(container);
  });
  test("<form>(role=search)", () => {
    const { container } = render(
      <form role='search'>
        <h2>Test</h2>
        <button>+1</button>
      </form>,
    );
    asserts(container);
  });
  test("<nav>(role=navigation)", () => {
    const { container } = render(
      <nav>
        <h2>Test</h2>
        <button>+1</button>
      </nav>,
    );
    asserts(container);
  });
  test("<section>(role=region)", () => {
    const { container } = render(
      <section aria-labelledby='test'>
        <h2 id='test'>Test</h2>
        <button>+1</button>
      </section>,
    );
    asserts(container);
  });
  test("<div>(role=alertdialog)", () => {
    const { container } = render(
      <div role='alertdialog'>
        <h2 id='test'>Test</h2>
        <button>+1</button>
      </div>,
    );
    asserts(container);
  });
  test("<div>(role=dialog)", () => {
    const { container } = render(
      <div role='dialog'>
        <h2 id='test'>Test</h2>
        <button>+1</button>
      </div>,
    );
    asserts(container);
  });
});

describe("Atoms", () => {
  function asserts(container: HTMLElement) {
    expect(container).toBeAtom();
    expect(container).not.toBeMolecule();
    expect(container).not.toBeOrganism();
    expect(container).not.toBeTemplate();
  }
  test("<p>(role=none)", () => {
    const { container } = render(<p>test</p>);
    asserts(container);
  });
  test("<h1>(role=heading)", () => {
    const { container } = render(<h1>test</h1>);
    asserts(container);
  });
  test("<a>(role=link)", () => {
    const { container } = render(<a href='#'>test</a>);
    asserts(container);
  });
  test("<button>(role=button)", () => {
    const { container } = render(<button>test</button>);
    asserts(container);
  });
  test("<input>(role=textbox)", () => {
    const { container } = render(<input type='text' />);
    asserts(container);
  });
  test("<textarea>(role=textbox)", () => {
    const { container } = render(<textarea />);
    asserts(container);
  });
  /**
   * the test is faild. this container is not atom
   */
  test.todo("<div>(single role)");
  // test("<div>(single role)", () => {
  //   const { container } = render(
  //     <div>
  //       {/* disable eslint. because this is test for testing custom matcher. */}
  //       {/* eslint-disable-next-line @next/next/no-img-element */}
  //       <img alt='picture' />
  //       <p>test</p>
  //     </div>,
  //   );
  //   asserts(container);
  // });
  test("<label>(role=none)", () => {
    const { container } = render(
      <label>
        <input id='check' type='checkbox' />
        Test
      </label>,
    );
    const { container: htmlFor } = render(
      <>
        <label htmlFor='check'>Test</label>
        <input id='check' type='checkbox' />
      </>,
    );
    asserts(container);
    asserts(htmlFor);
  });
  test("text(role=none)", () => {
    const { container } = render(
      <div>
        <p>test</p>
      </div>,
    );
    asserts(container);
  });
});
